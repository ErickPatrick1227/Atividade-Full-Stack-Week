import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Restaurante!</h1>
      <Link href="/fsw-donalds">
        <a>Ir para o menu do Restaurante</a>
      </Link>
    </div>
  );
};

export default HomePage;
