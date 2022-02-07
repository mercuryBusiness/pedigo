import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/homeScreen'
import { Button, Text, Box } from 'native-base';
import BottomBar from "../../components/BottomBar";

export default function Explore() {
    const index = useSelector((state) => state.homeScreen.indexBottomBar)
    const dispatch = useDispatch()

    return (
        <Box>
            <Box>
                <Button
                    onPress={() => dispatch(increment())}
                >
                    Increment value
                </Button>
                <Text>{index}</Text>
                <Text>Prueba</Text>

                <Button

                    onPress={() => dispatch(decrement())}
                >
                    Decrement value
                </Button>
            </Box>
        </Box>
    )
}
