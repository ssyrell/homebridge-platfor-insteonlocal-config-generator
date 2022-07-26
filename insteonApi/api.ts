import axios, { AxiosError, AxiosInstance } from 'axios';

import * as DataModels from './insteonDataModels';
import { Token } from '../dataModels'


export class Api {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create();
        this.axiosInstance.defaults.baseURL = 'https://connect.insteon.com/api/v2';
        this.axiosInstance.defaults.headers.common['Authentication'] = `APIKey ${process.env.API_KEY}`;
    }

    async getAccessToken(username: string, password: string): Promise<Token> {
        const url = '/oauth2/token';
        const body = new URLSearchParams();
        body.append('username', username);
        body.append('password', password);
        body.append('client_id', process.env.API_KEY);
        body.append('grant_type', 'password');
    
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    
        try {
            const response = await this.axiosInstance.post<DataModels.AccessToken>(url, body, config);
            return {
                token: response.data.access_token,
                expiresIn: response.data.expires_in
            };
        } catch (error) {
            this.logAxiosError('Authentication failed', error);
            throw error;
        }
    }

    async getHouses(): Promise<DataModels.HouseList> {
        const url = '/houses';
        try {
            const response = await this.axiosInstance.get(url);
            return response.data.HouseList;
        } catch (error) {
            this.logAxiosError('Failed to get houses', error);
        }
    }

    async getHouse(houseId: number): Promise<DataModels.House> {
        const url = `/houses/${houseId}`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get house with id of ${houseId}`, error);
        }
    }

    async getHouseRooms(houseId: number): Promise<DataModels.RoomList> {
        const url = `/houses/${houseId}/rooms`
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get rooms for hosue id ${houseId}`, error);
        }
    }

    async getRoom(roomId: number): Promise<DataModels.Room> {
        const url = `/houses/${roomId}`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get room with id of ${roomId}`, error);
        }
    }

    async getHouseDevices(houseId: number): Promise<DataModels.DeviceList> {
        const url = `/houses/${houseId}/devices`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get devices for house id ${houseId}`, error);
        }
    }

    async getHouseScenes(houseId: number): Promise<DataModels.SceneList> {
        const url = `/houses/${houseId}/scenes`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get scenes for house id ${houseId}`, error);
        }
    }

    async getDevice(deviceId: number): Promise<DataModels.Device> {
        const url = `/devices/${deviceId}`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get device with id of ${deviceId}`, error);
        }
    }

    async getScene(sceneId: number): Promise<DataModels.Scene> {
        const url = `/scenes/${sceneId}`;
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            this.logAxiosError(`Failed to get scene with id of ${sceneId}`, error);
        }
    }

    setAccessTokenForAllRequests(accessToken: Token): void {
        this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken.token}`;
    }

    private logAxiosError(message: string, error: AxiosError): void{
        console.log(message);
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        }
    
        //console.log('*********  REQUEST  *********');
        //console.log(error.request);
    }
}