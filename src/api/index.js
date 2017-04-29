/**
 * 数据处理
 */

import axios from 'axios';
import { buildUnixTime } from '@/utils/formateDate';
import { baseURL } from '@/config';
import apiList from './apiList';
import mock from './mock';

if (process.env.NODE_ENV === 'development') {
    mock();
}

export default {
    match_storehouse: (params) => {
        return axios.post(apiList.match_storehouse, params)
    },
    list_storerecords: (params) => {
        return axios.post(apiList.list_storerecords, params)
    },
    get_matched_storerecords: (params) => {
        return axios.post(apiList.get_matched_storerecords, params)
    },
    match_vehicle: (params) => {
        return axios.post(apiList.match_vehicle, params)
    },
    list_vechileinfos: (params) => {
        return axios.get(apiList.list_vechileinfos, { params: params })
    },
    path_recommend: (params) => {
        return axios.get(apiList.path_recommend, { params: params })
    }
}
