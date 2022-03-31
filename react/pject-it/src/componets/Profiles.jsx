import classes from './Profiles.module.css';


const Profiles = () =>{
    return (
        <div className={classes.cont}>
            <img src='https://tproger.ru/s3/uploads/2019/07/cover-Nachni-svoj-put-v-IT-880x308.png' alt='img'/>
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