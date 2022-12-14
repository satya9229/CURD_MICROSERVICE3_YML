/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import { Api } from '../../models'

export interface UserApi {
	createAnswers: (request: Api.BODYDATA | undefined) => Promise<CreateAnswersResponse>
	deleteAnswers: (quesId: number) => Promise<DeleteAnswersResponse>
	getAnswers: () => Promise<GetAnswersResponse>
	updateAnswers: (quesId: number, request: Api.BODYDATA | undefined) => Promise<UpdateAnswersResponse>
}

export type CreateAnswersResponse = CreateAnswers201Response | CreateAnswers400Response

export interface CreateAnswers201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface CreateAnswers400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type DeleteAnswersResponse = DeleteAnswers201Response | DeleteAnswers400Response

export interface DeleteAnswers201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface DeleteAnswers400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type GetAnswersResponse = GetAnswers201Response | GetAnswers400Response

export interface GetAnswers201Response {
	status: 201
	body: Api.BODYDATA[]
	headers?: never
}

export interface GetAnswers400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

export type UpdateAnswersResponse = UpdateAnswers201Response | UpdateAnswers400Response

export interface UpdateAnswers201Response {
	status: 201
	body: Api.ApiResponse
	headers?: never
}

export interface UpdateAnswers400Response {
	status: 400
	body: Api.ApiResponse
	headers?: never
}

