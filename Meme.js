import React, { Component }  from 'react';
import { render } from 'react-dom';
import './style.css'
class Meme extends Component{
  constructor(){
    super();
    this.state={
      toptext:"",
      bottomtext:"",
      imageurl:("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRfEKtmQ9mgOS_wSB67bVYgh2a1cnMtwbulrOt19apfS8IgHAE"),
      allMeme:[]
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
               // console.log(memes[0])
                this.setState({ allMeme: memes })
            })
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({ [name]: value })
      //  console.log(this.state.toptext)
    }
    
      handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMeme.length)
        const random = this.state.allMeme[randNum].url
        this.setState({ imageurl: random })
        
    }
    
  render(){
    return(
     <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="toptext"
                        placeholder="Top Text"
                        value={this.state.toptext}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomtext"
                        placeholder="Bottom Text"
                        value={this.state.bottomtext}
                        onChange={this.handleChange}
                    /> 
                
                    <button >Gen</button>
                </form>
                <div className="meme" >
                    <img src={this.state.imageurl} alt="" />
                    <h2  className="top">{this.state.toptext}</h2>
                    <h2 className="bottom">{this.state.bottomtext}</h2>
                </div>
      </div>
    )
  }
}
export default Meme