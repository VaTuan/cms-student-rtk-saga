import { ListParams, ListResponse, Student } from "types";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  add(student: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.post(url, student);
  },
  update(student: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.patch(url, student);
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};
export default studentApi;
