import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import { useAuth } from "../contexts/auth";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Layout>{user ? <Main /> : <LoginForm />}</Layout>
    </>
  );
}
