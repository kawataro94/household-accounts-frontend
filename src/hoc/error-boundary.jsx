import React from 'react';
import { Loader } from 'rsuite';
import { withRouter } from "react-router-dom";

import Center from '../components/Center';
import { withAuth } from '../context';
import { center } from './style';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    const { history, setIsLogin } = this.props;
    const jumpToSignIn = () => history.push('/signin');
    const { hasError } = this.state;

    const redirectMsg = (
      <div>
        <div>エラーが発生しました。</div>
        <div>数秒後にサインインページに移動します。</div>
      </div>
    );

    if (hasError) {
      setTimeout(() => {
        jumpToSignIn();
        setIsLogin(false);
      }, 10000);

      return (
        <Center hasHeader={true}>
          <div css={center}>
            <Loader size='md' speed='slow' content={redirectMsg} vertical />
          </div>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default withRouter(withAuth(ErrorBoundary));