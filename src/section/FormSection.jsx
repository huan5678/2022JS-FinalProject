import React from 'react';
import {useForm} from 'react-hook-form';
import Title from '../components/Title';
import {useFrontEndContext} from '../context/FrontendContextStore';

export const FormSection = () => {
  const {cartData} = useFrontEndContext();
  const formList = [
    {
      id: 1,
      title: '姓名',
      type: 'text',
      placeholder: '請輸入姓名',
      isRequired: true,
      name: 'userName',
    },
    {
      id: 2,
      title: '電話',
      type: 'text',
      placeholder: '請輸入電話',
      isRequired: true,
      name: 'userPhone',
    },
    {
      id: 3,
      title: 'Email',
      type: 'email',
      placeholder: '請輸入Email',
      isRequired: true,
      name: 'userEmail',
    },
    {
      id: 4,
      title: '寄送地址',
      type: 'text',
      placeholder: '請輸入寄送地址',
      isRequired: true,
      name: 'userAddress',
    },
    {
      id: 5,
      title: '交易方式',
      placeholder: '請選擇交易方式',
      isRequired: true,
      name: 'userPayment',
      content: ['ATM', '信用卡', '超商付款'],
    },
  ];

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      userPhone: '',
      userEmail: '',
      userAddress: '',
      userPayment: '',
    },
  });

  const handleOrderSubmit = (data) => {
    console.log('submit');
    console.log(data);
  };

  return (
    cartData.length > 0 && (
      <section className="container pt-[3.75rem] pb-20">
        <Title className="mb-8" content="填寫預訂資料" />
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleOrderSubmit)}>
          {formList.map((item) => {
            return (
              <div className="flex flex-col gap-1.5 w-1/3 mx-auto" key={item.name}>
                <label htmlFor={item.name}>{item.title}</label>
                <div className="relative flex w-full gap-2">
                  {item.content ? (
                    <select
                      id={item.name}
                      className="w-full border border-[#CED4DA] py-2.5 px-3 rounded focus:outline-primary"
                      {...register(item.name, {required: item.isRequired})}
                    >
                      {item.content.map((option) => {
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
                      {...register(item.name, {required: item.isRequired})}
                      className="border-1 border-[#CED4DA] rounded-md p-2 peer w-full border focus:outline-primary"
                      placeholder={item.placeholder}
                      aria-invalid={errors[item.name] ? 'true' : 'false'}
                    />
                  )}
                  {errors[item?.name]?.type === 'required' && (
                    <span
                      role="alert"
                      className="text-[#C72424] peer-invalid:required:visible absolute top-1/2 w-max left-full translate-x-2 -translate-y-1/2"
                    >
                      必填！
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
