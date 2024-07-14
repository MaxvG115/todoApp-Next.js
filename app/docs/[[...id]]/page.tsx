import styles from './style.module.css'

const DocsID = ({ params }) => {
    console.log(params)
    return <div className={`${styles.title} ${styles.another}`}>docs</div>
} 

export default DocsID