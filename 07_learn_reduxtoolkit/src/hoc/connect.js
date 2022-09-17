import { PureComponent } from 'react';
import { StoreContext } from './StoreContext';

export function connect(mapStateToProps, mapDispatchToProps) {
  // 高階組件: 函數
  return function (WrapperComponent) {
    class NewComComponent extends PureComponent {
      constructor(props, context) {
        super(props);

        this.state = mapStateToProps(context.getState());
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate();
          this.setState(mapStateToProps(this.context.getState()));
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const stateObj = mapStateToProps(this.context.getState());
        const dispatchObj = mapDispatchToProps(this.context.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }

    NewComComponent.contextType = StoreContext;
    return NewComComponent;
  };
}
