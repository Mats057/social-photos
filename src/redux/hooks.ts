import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from './root-reducer';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
