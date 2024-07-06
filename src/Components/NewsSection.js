import React, { Component } from "react";
import NewItem from "./NewItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class NewsSection extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    // apiKey: "6a6360c5247d4b42a3cf89a45dbf0788",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log('I am constructor.')
    this.state = {
      articles: [], // we will give here empty array and comment the already existed article array because we want the app to fetch the articles directly from api.
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsReport`;
    
  }

  async componentDidMount() {
    console.log("i am cdm");
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=1`
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let newdata = await data.json();
    // console.log(newdata);
    // this.setState({
    //     articles: newdata.articles,
    //     totalResults: newdata.totalResults,
    //     loading:false
    // })  /* in this setstate we are using 1. articles: newdata.articles, where we are accessing the articles from the api and giving it a new value of newdata.articles where newdata is the json formatted data we are receving from the API. so that we can only get the redable information in the used props in the newsItem.js file.    2. totalResults: newdata.totalResults, here we are accessing totalResults from the and giving it a new value of newdata.totalresults where newdata is the json formatted data we are receving from the API so that we can limit the number of results we are getting on a single page. */

    this.updateNews();
    
  }

  updateNews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page= ${this.state.page}`;
    this.setState({ loading: true });
    this.props.setProgress(40);
    let data = await fetch(url);
    let newdata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: newdata.articles,
      totalResults: newdata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  prvClick = async () => {
    // console.log('Previous btn')
    // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page= ${this.state.page - 1}`
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let newdata = await data.json();
    // this.setState({
    //     page: this.state.page - 1,
    //     articles: newdata.articles,
    //     loading: false
    // })
    this.setState({
      page: this.state.page - 1,
    });
  };

  nxtClick = async () => {
    // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    // }
    // else {
    //     console.log('Next btn')
    //     let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page= ${this.state.page + 1}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let newdata = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: newdata.articles,
    //         loading: false
    //     })
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };


  fetchMoreData = async() => {
    const nextPage = this.state.page + 1; // Increment the page number by 1
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${nextPage}`;
    let data = await fetch(url);
    let newdata = await data.json();
    this.setState((prevState) => ({
      articles: prevState.articles.concat(newdata.articles),
      totalResults: newdata.totalResults,
      page: nextPage, // Update the page number in the state
    }));
};



  render() {
    return (
      <>
        
            <h1 className="text-center my-5"> NewsReport - Today's Top {this.capitalize(this.props.category)} Headines </h1>
            {this.state.loading && <Loader/>} {/* This line shows the code in which Loader in only accessed when this.state.loading is true else Loader will not be called or executed.  */}
            <InfiniteScroll 
              dataLength={this.state.articles.length} 
              next={this.fetchMoreData} 
              hasMore={this.state.articles.length !== this.state.totalResults} 
              loader={<Loader/>}>

              <div className="container">

                <div className="row ">
                  {this.state.articles.map((element, index) => {
                      /* This line shows the code the line '{this.state.loading && this.state.articles.map((element) =>{' means that if 'this.state.loading' is true then only execute 'this.state.articles.map((element)' but we are applying the logic in which we are using '!' i.e. negation sign ifront of 'this. state.loading' so now by applying negation sign 'this.state.loading' becomes false so the logic is do not execute 'this.state.articles.map((element)' until the 'this.state.loading' is executing.*/
                    return (
                      <div className="col-md-4" key={`${element.url}_${index}`}>
                        <NewItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 130): ""} imageUrl={element.urlToImage} newsUrl={element.url} authors={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>

            
            {/* <div className="container d-flex justify-content-between pb-5">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" style={{ padding: "10px" }} onClick={this.prvClick}> &larr; Previous </button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" style={{ padding: "10px" }} onClick={this.nxtClick}> Next &rarr; </button>
            </div> */}
          
        
      </>
    );
  }
}

export default NewsSection;
