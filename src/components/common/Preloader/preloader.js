import preloader from '../../../assets/preloader.svg'

let Preloader = (props) => {
    return (
        <div style={{boxSizing:'border-box'}}>
            <img src={preloader} alt='loading' />
        </div>
    )
}

export default Preloader;