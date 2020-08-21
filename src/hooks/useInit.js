import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useInit = (action, extraDeps = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action())
  }, [action, dispatch, ...extraDeps])
}

export default useInit;