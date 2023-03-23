import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersComponent.module.css';
import { Context } from '../../context/context';
import {SearchOutlined} from '@ant-design/icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from 'react-router-dom';

const CharactersComponent = () => {
  const { characters } = useContext(Context)
  const [busqueda, setBusqueda] = useState(characters);

  const handleChange = e=>{
    setBusqueda(e.target.value)
    filterProducts(e.target.value)
  }
  
  const filterProducts = (busqueda) => {
    var results = characters.filter((character) => {
      if(character.name.toLowerCase().includes(busqueda.toLowerCase())){
        return character;
      }
    })
    setBusqueda(results)
  }


  return(
    <SimpleBar style={{ maxHeight:700 , color:'black'}}>
      <div className={styles.inputCon}>
      <SearchOutlined style={{fontSize:'17px'}}  />
      <input type='text' placeholder='Look your character' className={styles.inputLook} onChange={handleChange}></input>
        
      </div>

      <div className={styles.CharactersComponent}>
        {busqueda.map((character) => (
          <div className={styles.Container}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <img src={character.image} width={'300px'}></img>
            </div>
        ))}
      </div>
    </SimpleBar>
)};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
