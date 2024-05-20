import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AiOutlineArrowRight, AiOutlinePlus} from "react-icons/all";
import React from "react";

import {userStore} from "../../stores";
import {Button} from "../Button/Button";
import {apiService} from "../../services";

import style from "./LabWorks.module.scss"
import {LabWork} from "../../../api";
import {useToast} from "@chakra-ui/react";

export const LabWorks = observer(() => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [labs, setLabs] = React.useState<LabWork[]>();
    const navigate = useNavigate()
    const toast = useToast();

    React.useEffect(() => {

        const getF = async () => {
            const resp = await apiService.getLabWorks()
            if (resp instanceof Error) {
                return;
            }
            // @ts-ignore
            setLabs(resp)
        }
        void getF();
    }, [])

    const startLabWork = async (userId: string | undefined, labWorkId: string | undefined) => {
        setIsLoading(true);
        const response = await apiService.startVirtualDesktop(userId!, labWorkId!);
        if (response instanceof Error) {
            // TODO: handle error
            return;
        }
        if (!response){
            toast({
                title: 'Не удалось начать лабораторную работу, повторите попытку',
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            
            return;
        }
        toast({
            title: 'Вы успешно начали выполнение лабораторной работы',
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top"
        })

        setIsLoading(false);
    }

    return (<div className={style.container} style={{padding: "24px"}}>
        <div>

            <div className={style.labItem}>
                <div>
                    <div>{labs?.[0].title}</div>
                    <div className={style.labDescription}>
                        {labs?.[0].shortDescription}
                    </div>
                </div>
                <div style={{flexShrink: 0}}>
                    {!!userStore.user?.labs ?
                        <Button rightIcon={<AiOutlineArrowRight size={"20px"}/>}
                                onClick={() => {
                                    navigate(`/labs/${labs?.[0].id}/${userStore.user?.id}`, {replace: true});
                                }}>Перейти</Button> :
                        <Button rightIcon={<AiOutlinePlus size={"20px"}/>} isLoading={isLoading} onClick={()=>startLabWork(userStore.user?.id, labs?.[0].id)}>Начать
                            выполение
                        </Button>
                    }
                </div>
            </div>
        </div>

    </div>)
})
