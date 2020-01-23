import { Alumno } from './../../global/tables/model/alumno';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import alumnos from '../../assets/json/alumnos.json';
import { Observable } from 'rxjs';



const URL = alumnos;

@Injectable({
  providedIn: 'root'
})
export class FilestudentService {

  constructor(private http: HttpClient) { }




}
