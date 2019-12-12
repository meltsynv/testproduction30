import React, { Component} from 'react';
import ScrollToTop_Btn from '../resources/scrolltotop.svg'

class ScrollToTopBtn extends Component {
    state = {
        activeClass:''
    }

    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            let activeClass = 'hidden';
            if (window.scrollY >= 100) {
                activeClass = 'active';
            }
            this.setState({ activeClass });
        });
    };

    render() {
        return (
            <div className={`scroll-to-top ${this.state.activeClass}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={ScrollToTop_Btn} alt='scroll to top icon'/>
            </div>
        );
    }
}

export default ScrollToTopBtn;