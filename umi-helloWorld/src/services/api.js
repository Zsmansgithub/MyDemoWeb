// import request from '../utils/request';
import { request } from 'umi';

export async function getTableDefList(params) {
    return request('/table/tableDef', {
        method: 'POST',
        body: params,
    });
}

// export async function queryItem() {
//     return request('/web201605/js/item.json');
// }