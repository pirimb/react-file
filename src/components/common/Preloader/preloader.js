import preloader from '../../../assets/preloader.svg'

let Preloader = (props) => {
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <img src={preloader} alt='loading' />
        </div>
    )
}

export default Preloader;