import React, { Component } from 'react'

export class NewItem extends Component {


  render() {

    let {title, description, imageUrl, newsUrl, authors, date, source} = this.props
    
    return (
      <div>

        <div className="card my-4 mx-4" style={{ height:'31rem', width:'95%'}}>
            {/* <h5>This a News Item</h5> */}
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2024/03/11/1600x900/TCS_on_overseas_payments_for_investments_1695628348453_1710144311141.jpg"} className="card-img-top" style={{height:'15rem'}} alt="..."  />
            <div style={ {display: 'flex', position: 'absolute', top: '0px', right: '0', fontsize: '13px'}}>
              
            <span className=" badge rounded-pill bg-primary">{source}</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text mx-0"><small className="text-muted">By- {authors?authors:'Unknown'}, on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewItem
