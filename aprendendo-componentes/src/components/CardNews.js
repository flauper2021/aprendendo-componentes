class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());        
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");        
        newsImage.src = this.getAttribute("photo") || "assets/default-image.jpg";
        newsImage.alt = this.getAttribute("alt");
        cardRight.appendChild(newsImage);        


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `

        .card{
            width: 80%;
            display:flex ;
            flex-direction: row;
            margin: 1rem;
            -webkit-box-shadow: 0px -1px 22px 7px rgba(0,0,0,0.58); 
            box-shadow: 0px -1px 22px 7px rgba(0,0,0,0.58);
            justify-content: space-between;
            }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 1rem;
        }
        
        .card__left span{
            font-weight: 300;
        }
        
        .card__left a{
            margin-top:15px ;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left p{
            color: rgb(119, 115, 115);
        }
        
        .card__right img{
            height-max: 30%;
            width-max: 30%;    
        }

        `;
        return style;
    }

    
}

customElements.define("card-news", Cardnews);