import React, {useMemo} from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Title from '../components/Title';
import {useFrontEndContext} from '../context/FrontendContextStore';

const schema = yup
  .object({
    userName: yup.string().required(),
    userPhone: yup.string().required().min(10).max(10),
    userEmail: yup.string().email().required(),
    userAddress: yup.string().required(),
    userPayment: yup.string().required(),
  })
  .required();

export const FormSection = () => {
  const {cartData, handlePostCustomOrder, handleUpdateChart} = useFrontEndContext();
  const formList = useMemo(
    () => [
      {
        id: 1,
        title: '姓名',
        type: 'text',
        placeholder: '請輸入姓名',
        isRequired: true,
        name: 'userName',
        rules: {
          required: {
            value: true,
            message: '必填!',
          },
          pattern: {
            message: '請輸入中英文姓名',
          },
        },
      },
      {
        id: 2,
        title: '電話',
        type: 'text',
        placeholder: '請輸入電話',
        isRequired: true,
        name: 'userPhone',
        rules: {
          required: {
            value: true,
            message: '必填!',
          },
          pattern: {
            message: '請輸入10碼電話號碼',
          },
        },
      },
      {
        id: 3,
        title: 'Email',
        type: 'email',
        placeholder: '請輸入Email',
        isRequired: true,
        name: 'userEmail',
        rules: {
          required: {
            value: true,
            message: '必填!',
          },
          pattern: {
            message: '請輸入正確Email',
          },
        },
      },
      {
        id: 4,
        title: '寄送地址',
        type: 'text',
        placeholder: '請輸入寄送地址',
        isRequired: true,
        name: 'userAddress',
        rules: {
          required: {
            value: true,
            message: '必填!',
          },
          pattern: {
            message: '請輸入正確寄送地址',
          },
        },
      },
      {
        id: 5,
        title: '交易方式',
        placeholder: '請選擇交易方式',
        isRequired: true,
        name: 'userPayment',
        rules: {
          required: {
            value: true,
            message: '必填!',
            type: 'array',
            items: {
              type: 'string',
              enum: ['ATM', '信用卡', '超商付款'],
            },
          },
          pattern: {
            message: '請選擇正確交易方式',
          },
        },
      },
    ],
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOrderSubmit = async ({
    userName,
    userPhone,
    userEmail,
    userAddress,
    userPayment = 'ATM',
  }) => {
    try {
      const resultData = {
        user: {
          name: userName?.trim(),
          tel: userPhone?.trim(),
          email: userEmail?.trim(),
          address: userAddress?.trim(),
          payment: userPayment,
        },
      };
      await handlePostCustomOrder(resultData);
      await handleUpdateChart();
      reset({
        userName: '',
        userPhone: '',
        userEmail: '',
        userAddress: '',
        userPayment: 'ATM',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    cartData.length > 0 && (
      <section id="orderInfo" className="container pt-[3.75rem] pb-20">
        <Title className="mb-8" content="填寫預訂資料" />
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleOrderSubmit)}>
          {formList.map((item) => {
            return (
              <div className="flex flex-col gap-1.5 w-1/3 mx-auto" key={item.name}>
                <label htmlFor={item.name}>{item.title}</label>
                <div className="relative flex w-full gap-2">
                  {item.name === 'userPayment' ? (
                    <select
                      id={item.name}
                      className="w-full border border-[#CED4DA] py-2.5 px-3 rounded focus:outline-primary"
                      {...register(item.name, {required: item.rules.required})}
                    >
                      {item.rules.required.items.enum.map((option) => {
                        return (
                          <option value={option} key={option}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input
                      id={item.name}
                      type={item.type}
                      {...register(item.name, {required: item.isRequired})}
                      className="border-1 border-[#CED4DA] rounded-md p-2 peer w-full border focus:outline-primary"
                        placeholder={item.placeholder}
                        maxLength={item.name === 'userPhone' ? 10 : 50}
                        minLength={item.name === 'userPhone' ? 10 : 0}
                      aria-invalid={errors[item.name] ? 'true' : 'false'}
                    />
                  )}
                  {errors[item.name] && (
                    <span className="absolute right-0 text-sm text-red-500 -translate-x-3 -translate-y-1/2 top-1/2">
                      {item.rules.pattern.message}
                    </span>
                  )}
                  {errors[item?.name]?.type === 'required' && (
                    <span
                      role="alert"
                      className="text-[#C72424] peer-invalid:required:visible absolute top-1/2 w-max left-full translate-x-2 -translate-y-1/2"
                    >
                      {
                        formList.find((formItem) => formItem.name === item.name).rules.required
                          .message
                      }
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <button
            type="submit"
            className="bg-black text-white text-xl leading-tight rounded-md py-2.5 px-16 hover:bg-secondary w-1/4 mx-auto"
          >
            送出預訂資料
          </button>
        </form>
      </section>
    )
  );
};

export default FormSection;
