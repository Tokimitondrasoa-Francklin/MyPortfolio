import { NextApiResponse, NextApiRequest } from "next";
import {services} from '../../data'

export default (req:NextApiRequest, res:NextApiResponse) => {

        //by deafult get request

        console.log(services);

        res.status(200).json({services})


}