import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {requestQoutes,setLoader} from '../actions/QoutesAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import logo from '../logo.svg';
import logo from '../logo.jpg';


class Home extends Component{

  constructor(props){
    super(props);
    this.state={
      currentPage: 1,
      PerPage: 12,
      data: [],
      
    }
    this.myRef = React.createRef()  
  }

 componentDidMount(){
     
    this.props.setLoader(true);
    this.props.requestQoutes();
    
 }
 

  render(){

    const  handleNextClick=(event)=> {
      event.preventDefault();
      var newpage = this.state.currentPage + 1;
      this.setState({
        ...this.state, currentPage: newpage
      });
      window.scrollTo(0, 500);
    }
    const  handlePrevClick=(event)=> {
      event.preventDefault();
      var newpage = this.state.currentPage - 1;
      this.setState({
        ...this.state, currentPage: newpage
      });
      window.scrollTo(0, 500);
    }

    // Logic for displaying todos
    const indexOfLastQ = this.state.currentPage * this.state.PerPage ;
    const indexOfFirstQ = indexOfLastQ- this.state.PerPage;
    const currentQ =  this.props.data.data ?  this.props.data.data.slice(indexOfFirstQ, indexOfLastQ):"";

    const renderQ = currentQ !="" ? (
      currentQ.map((q, index) => {
        return (
  
        <div class="row" key={index}>
        <div class="quote__item">
           
            <div class="quote__item__text">
                <h3 class="heading-tertiary-2 u-margin-bottom-small">{q.author}</h3>
                <p>
                {q.text}
                </p>
            </div>
        </div>
    </div>
        
         ) ;
      })
    ):""

    // Logic for displaying page numbers
    const pageNumbers = [];
    const datalength = this.props.data.data? this.props.data.data.length:0;
    for (let i = 1; i <= Math.ceil(datalength / this.state.PerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = this.props.data.data? (
      <div class="pagecount__list">
        <span class="pagecount__item">{this.state.currentPage}</span>
        
        <span class="pagecount__item">{datalength}</span> 
      </div>
    ):"";

    
  return (

    <div>
      <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="/" class="navigation__link"><span>01</span>Home</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular Qoutes</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Quotes</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Make Qoute</a></li>
                    </ul>
            </nav>
        </div>
      <header class="header">
            <div class="header__logo-box">
                <p>Quotes</p>
            </div>

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Be Better!</span>
                    <span class="heading-primary--sub">You didn't come this far to come this far</span>
                </h1>

                <a href="#section-quotes" class="btn btn--white btn--animated">Discover more quotes</a>
            </div>
        </header>

        <main ref={this.myRef}>
        <section id="section-quotes" class="section-quotes">
               

               <div class="u-center-text u-margin-bottom-big">
                   <h2 class="heading-secondary">
                       We inspire and motivate people
                   </h2>
               </div>

               <div className="quote" >
               {this.props.data.data? renderQ: ""}

               </div>
               


               <div className="u-center-text u-margin-top-big pagecount">
                 
                 {renderPageNumbers}
  
                 </div>
               

               <div class="u-center-text u-margin-top-big">
                 {this.state.currentPage > 1?  <a href="javascript:void(0)" onClick={handlePrevClick} class="btn-text">&larr;Previous quotes &nbsp;&nbsp;</a>:""}
                 {this.props.data.data?   <a href="javascript:void(0)" onClick={handleNextClick} class="btn-text">Next quotes &rarr;</a>:""}

                   
               </div>
           </section>
        </main>

      

            <footer class="footer">
            <div class="footer__logo-box">

                <picture class="footer__logo">
                    <source srcset={logo}
                            media="(max-width: 37.5em)"/>
                    
                </picture>


                
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Built by <a href="#" class="footer__link">Atunde Arisekola</a> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </footer>
    </div>
 
  
  )};
}


const mapDispatchToProps = dispatch =>{
  return{
      ...bindActionCreators({
        requestQoutes,
        setLoader
      },dispatch)
  }
}

const mapStateToProps = (state) =>{
  return{
      loader: state.QoutesReducer.loader,
      data: state.QoutesReducer.data,
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
