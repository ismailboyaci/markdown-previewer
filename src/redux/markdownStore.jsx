import  markdownApp  from './markdownApp';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer:markdownApp})