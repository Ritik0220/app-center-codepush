import CodePush from 'react-native-code-push';
import React from 'react';

const CODE_PUSH_OPTIONS = {
    checkFrequency: CodePush.CheckFrequency.MANUAL,
};

const withCodePush = WrappedComponent =>{
    class WrappedApp extends React.PureComponent {
        componentDidMount() {
            CodePush.sync({ updateDialog: true,installMode: CodePush.InstallMode.IMMEDIATE},this.syncWithCodePush,null);
          }
        
          syncWithCodePush = (status)=>{
            console.log(status);
          }
        render() {
         return(
            <WrappedComponent/>
         );
         }
    }
    return CodePush(CODE_PUSH_OPTIONS)(WrappedApp)
};
export default withCodePush;