import classes from './Profiles.module.css';


const Profiles = () =>{
    return (
        <div className={classes.cont}>
            <img src='./images/dino.png' alt='img'/>
        <div>
            ava + photo
        </div>
        <div>
            My post
            <div>
                New post
            </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>      
        </div>
  </div>
    );
}

export default Profiles;