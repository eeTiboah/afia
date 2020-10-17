import React from 'react'
import styles from './App.module.css'
import cs from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

const App = ()=> {
    return (
        <form className={styles.container}>
            <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faTimes} />
            <label>Select Your Recipient</label>
            <div className={styles.inputInfo}>
            <input 
                placeholder='Search from your phone contact'
                type='text'
                className={styles.containerInput} />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </div>

            <div className={styles.separator}>OR</div>
            
            <div className={cs(styles.details, styles.first)}>
                <label>Phone Number</label>
                <input 
                placeholder='Enter Number'
                />
            </div>
            <div className={cs(styles.details, styles.second)}>
                <label>Network</label>
                <select>
                    <option value="" disabled selected>Select Network</option>
                    <option value="mtn">MTN</option>
                    <option value="vodafone">Vodafone</option>
                    <option value="airteltigo">AirtelTigo</option>
                    <option value="glo">Glo</option>
                </select>
            </div>
            <button className={styles.btn}>DONE</button>
        </form>
    )
}

export default App