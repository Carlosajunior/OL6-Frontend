import axios from "axios";
const instance = axios.create({
 baseURL: 'https://ol6.onrender.com/api/',
 timeout: 15000,
});

/*type User = {
    data: {
        email: string,
        password: string
    }
    id: number;
    email: string;
    first_name: string;
};
  
type GetUsersResponse = {
    data: User[];
};*/

type GetUserResponse = {
    data: {
        email: string,
        password: string
    },
    message: string,
    success: boolean,
    time: number,
    timestamp: number
};

type LoginResponse = {
    data:{
        id: number
    },
    message: string,
    success: boolean,
    time: number,
    timestamp: number
};

type UpdateUserResponse = {
    data:{},
    message: string,
    success: boolean,
    time: number,
    timestamp: number
};

type DeleteUserResponse = {
    data:{},
    message: string,
    success: boolean,
    time: number,
    timestamp: number
};

type User = {
    name: string,
    id: string,
    phone: string,
    email: string,
    tipo: string
}

type Teste ={
    data: [{id: string, email: string, phone: string, name: string, tipo: string}]
    message: string
    success: string
    time: string
    timestamp: number
}

export async function getUser(id: string) {
    try {
    
     const { data } = await instance.get<GetUserResponse>(
        '/users/'+id,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
}

export async function getUsers(): Promise<User[]>{
    try {
    
     const { data, status } = await instance.get<Teste>(
        '/users',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const result: User[] = data.data
      console.log(data)
        if(status === 200)
            return result;
        else
            return []
    } catch (error) {
      if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return []
      } else {
            console.log('unexpected error: ', error);
            return []
      }
    }
}

export async function login(email: string, password: string) {
    try {

        const {data, status} = await instance.post<LoginResponse>(
        '/login',
        {email: email, password: password},
        {
            headers: {
            Accept: 'application/json',
            },
        },
        );
        if(status === 200)
            return data;
        else
            return null
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function createUser(email: string, password: string, phone: string, name: string) {
    try {
        const { data } = await instance.post<GetUserResponse>(
        '/users',
        {email: email, password: password, phone: phone, name: name},
        {
            headers: {
            Accept: 'application/json',
            },
        },
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function updateUser(email: string, password: string, phone: string, name: string, id: string) {
    try {
        let data1 ={
            name: name,
            email: email,
            phone: phone,

        }
        const { data } = await instance.put<UpdateUserResponse>(
        '/users/'+id,
        {email: email, phone: phone, name: name},
        {
            headers: {
            Accept: 'application/json',
            },
        },
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function deleteUser(id: string) {
    try {
        const { data } = await instance.delete<DeleteUserResponse>(
        '/users/'+id,
        {
            headers: {
            Accept: 'application/json',
            },
        },
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}