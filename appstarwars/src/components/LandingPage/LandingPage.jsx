import React, {useEffect} from 'react'
import style from '../LandingPage/LandingPage.module.css'
import Cards from '../Cards/Cards'
import { useDispatch } from 'react-redux'
import { reset } from '../../redux/actions'

const LandingPage = () => {

  /* const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset())
  }, [])
 */
  return (
    <div className={style.container}>
      <Cards/>
    </div>
  )
}

export default LandingPage