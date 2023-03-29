import axios from 'axios';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Backdrop from '../../components/HOC/Backdrop/Backdrop';
import PopUp from '../../components/HOC/PopUp/PopUp';
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/UI/Footer/Footer';
import { usePopup } from '../../hooks/usePopup.hook';
import './LandingPage.scss';

const LandingPage: React.FC<RouteComponentProps> = ({ history }) => {
  const testPopup = usePopup(false, 'blur');

  const testRequestOne = (): void => {
    axios.get('https://website-builder-two-fawn.vercel.app/api/test/test');
  };
  const testRequestTwo = (): void => {
    axios.post(
      'website-builder-client-lhroo6jve-tagir-developer.vercel.app/api/auth/login',
      { email: 'tagirdjan@gmail.com', password: '12345q' }
    );
  };
  const testRequestThree = (): void => {
    fetch(
      'website-builder-client-lhroo6jve-tagir-developer.vercel.app/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: 'tagirdjan@gmail.com',
          password: '12345q',
        }),
      }
    )
      .then(response => response.json())
      .then(json => console.log(json));
  };

  return (
    <>
      {/* <ScrollTo value={testPopup.scroll} dep={testPopup.isOpen} /> */}

      <PopUp {...testPopup.popupProps} withTitle='Основные настройки'>
        {/* <BasicSettings handler={() => { }} /> */}
      </PopUp>

      <Backdrop {...testPopup.backdropProps}>
        <TopMenu menuType='main' />
        {/* <div className="content-area" style={testPopup.isOpen ? {marginTop: `-${testPopup.scroll - 60}px`} : undefined} > */}
        <div className='content-area'>
          <div className='landing-wrapper'>
            <div className='landing-header'>
              <div className='landing-header__container'>
                <div className='landing-header__text-container'>
                  <h1 className='landing-header__heading'>
                    Хотите создать сайт-визитку для Instagram?
                  </h1>
                  <Button parentClass='landing-header' handler={testRequestOne}>
                    Тестовый запрос 1
                  </Button>

                  <Button parentClass='landing-header' handler={testRequestTwo}>
                    Тестовый запрос логин
                  </Button>

                  <Button
                    parentClass='landing-header'
                    handler={testRequestThree}
                  >
                    Авторизация через фетч
                  </Button>
                  {/* <Button parentClass="landing-header" handler={() => history.push('/registration')} >
										Создать сайт
									</Button> */}
                </div>
                <div className='landing-header__image-container'>
                  <div className='landing-header__image'></div>
                </div>
              </div>
            </div>
            <div className='landing-blocks'>
              <div className='landing-blocks__container'>
                <div className='landing-blocks__blocks-wrapper'>
                  <div className='landing-blocks__block-light'>Блок 2</div>
                  <div className='landing-blocks__block-dark'>Блок 3</div>
                  <div className='landing-blocks__block-light'>Блок 4</div>
                </div>
              </div>
            </div>
            <div className='landing-final'>
              <Button
                parentClass='landing-final'
                handler={() => history.push('/registration')}
              >
                Создать сайт
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </Backdrop>
    </>
  );
};

export default withRouter(LandingPage);
