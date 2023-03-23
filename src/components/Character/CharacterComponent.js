import {React, useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterComponent.module.css';
import { Context } from '../../context/context'

const CharacterComponent = () => {

  const { characters } = useContext(Context)
  return(
  <div className={styles.CharacterComponent}>
    CharacterComponent Component
  </div>
)};

CharacterComponent.propTypes = {};

CharacterComponent.defaultProps = {};

export default CharacterComponent;
