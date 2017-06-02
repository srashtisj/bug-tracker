import { Injectable } from '@angular/core';

@Injectable()

export class TicketService {
    constructor() { }
    getTicketList(){
        return [
            {"Id": 1, "AssignedTo": "Alex", "Title": "Add feature to file upload", "Description": "Add feature to file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3},
            {"Id": 2, "AssignedTo": "Alex", "Title": "Create mockups for file upload UI", "Description": "Create mockups for file upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3},
            {"Id": 3, "AssignedTo": "Alex", "Title": "Implement backend API for file upload", "Description": "Implement backend API for file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2},
            {"Id": 4, "AssignedTo": "Alex", "Title": "Create a front-end for file upload", "Description": "Create a front-end for file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2},
            {"Id": 5, "AssignedTo": "Alex", "Title": "Photo cropper bugs", "Description": "Photo cropper bugs", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2},
            {"Id": 6, "AssignedTo": "John", "Title": "Display uploaded files list on dashboard", "Description": "Display uploaded files list on dashboard", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 1},
            {"Id": 7, "AssignedTo": "John", "Title": "Write API docuementation for file Upload", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3},
            {"Id": 8, "AssignedTo": "John", "Title": "Fix file upload feature bug", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2},
            {"Id": 9, "AssignedTo": "John", "Title": "Implement best search in product", "Description": "File upload UI", "Type": "Bug", "Priority": 9, "ticketNumber": "PM-1", "Status": 2},
            {"Id": 10, "AssignedTo": "John", "Title": "Wrap up fileupload & cropper functionility together", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 1},
            {"Id": 11, "AssignedTo": "Tom", "Title": "Create test cases for file upload feature", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3},
            {"Id": 12, "AssignedTo": "Tom", "Title": "Create test cases for photo cropper feature", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3},
        ]
    }
}