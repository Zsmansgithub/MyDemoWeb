// import request from '../utils/request';
import { request } from 'umi';

export async function queryHeroList() {
  return request('/web201605/js/herolist.json');
}
export async function getHeroDetails(params) {
  return request('/web201605/js/herodetails.json', {
    method: 'POST',
    body: params,
  });
}
export async function queryItem() {
  return request('/web201605/js/item.json');
}
export async function querySummoner() {
  return request('/web201605/js/summoner.json');
}
export async function queryMing() {
  return request('/ming.json');
}
export async function getFreeHeros(params) {
  return request('/freeheros.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: params,
  });
}