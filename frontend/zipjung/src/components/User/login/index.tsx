import Image from 'next/image';
import LoginButton from '@/components/User/login/LoginButton';
import styles from '@/components/User/login/index.module.scss';

function Form() {
  const loginlinks = [
    {
      id: '1',
      link: `https://back.zipzoong.store/oauth2/authorization/google`,
      image: '/Images/LoginGoogleButton.png',
    },
    {
      id: '2',
      link: `https://back.zipzoong.store/oauth2/authorization/naver`,
      image: '/Images/LoginNaverButton.png',
    },
    {
      id: '3',
      link: `https://back.zipzoong.store/oauth2/authorization/kakao`,
      image: '/Images/LoginKakaoButton.png',
    },
  ];

  return (
    <div className={styles.login}>
      <a href="/">
        <Image
          src="/Images/zipjung_logo.png"
          width={150}
          height={80}
          alt="zipjung_logo"
          className={styles.logo}
        />
      </a>
      <div className={styles.loginText}>Login</div>
      <div className={styles.loginContent}>
        소셜 계정으로 쉽게 로그인하세요.
      </div>
      <div className={styles.loginButtons}>
        {loginlinks.map(({id, link, image}) => (
          <LoginButton key={id} loginLink={link} loginImg={image} />
        ))}
      </div>
    </div>
  );
}

export default Form;
