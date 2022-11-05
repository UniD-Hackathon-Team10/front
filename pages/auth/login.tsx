import Button from "@components/atoms/Button";
import TextInput from "@components/atoms/TextInput";
import AuthLayout from "@components/AuthLayout";
import React, { ChangeEvent, ReactNode, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

type LoginProps = {};

const Login = ({}: LoginProps) => {
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("아이디를 입력해 주세요."),
      password: Yup.string().min(6, "6자리 이상 비밀번호를 입력해 주세요.").required("비밀번호를 입력해 주세요."),
    }),
    onSubmit: async () => {
      // TODO API 연동
      console.log("로그인");
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <TextInput name="id" placeholder="아이디" onChange={handleChange} value={values.id} error={errors.id} />
        <TextInput name="password" placeholder="비밀번호" onChange={handleChange} value={values.password} error={errors.password} />
        <Button label="로그인" buttonStyle={{ width: "100%", borderRadius: "30px", height: "48px", fontSize: "18px", fontWeight: "bold" }} />
      </form>
      <Link href="/auth/signup" passHref>
        <a style={{ margin: "20px 0" }}>회원가입</a>
      </Link>
    </>
  );
};

Login.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default Login;