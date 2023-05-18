import './styles.css';

export const PostCard = ({title, cover, body, id}) => (
       
    <div className='post'>
            <img src={cover} alt={title}/>
            
          <div className='post-content'>
            <h1>{title} {id} </h1>
            
            <p>{}
              <h1>Eurico Leão</h1>
            </p>
          
          </div>
          </div>
    );


    

    
