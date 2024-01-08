import request from './request'

export function getPhoneTopListApi(){
  return request({
      url : "phone_top",
      method : "GET",
  })
}

export function getComputerTopListApi(){
  return request({
      url : "computer_top",
      method : "GET",
  })
}

export function getNvzhuangTopListApi(){
  return request({
      url : "nvzhuang_top",
      method : "GET",
  })
}

export function getShipinTopListApi(){
  return request({
      url : "shipin_top",
      method : "GET",
  })
}

export function getTop20KeywordsListApi() {
  return request({
    url: 'top_20_keywords',
    method: 'GET'
  })
}

export function getTop100KeywordsListApi() {
  return request({
    url: 'top_100_keywords',
    method: 'GET'
  })
}

export function getBottom20KeywordsListApi() {
  return request({
    url: 'bottom_20_keywords',
    method: 'GET'
  })
}

export function getBottom100KeywordsListApi() {
  return request({
    url: 'bottom_100_keywords',
    method: 'GET'
  })
}

export function getLocationCounts() {
  return request({
    url: 'location_counts',
    method: 'GET'
  })
}