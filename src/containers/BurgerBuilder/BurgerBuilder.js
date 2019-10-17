import React,{PureComponent,Fragment} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            ingredient:{
                meat:0,
                cheese:0,
                salad:0,
                bacon:0
            },

        };
    }

    render(){
        return(
            <Fragment>
                <Burger ingredient={this.state.ingredient}/>
                <div>Build Control</div>

            </Fragment>
        );

    }
}



export default BurgerBuilder;