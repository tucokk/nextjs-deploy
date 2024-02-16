import Button from "@/app/components/Button";
import { Checklist, ChecklistItem } from "@/app/components/Checklist";
import Fieldset from "@/app/components/Fieldset";
import { Select, SelectOption } from "@/app/components/Select";
import TextField from "@/app/components/TextField";
import Textarea from "@/app/components/Textarea";
import { Editor } from "@tinymce/tinymce-react";
import { BadgeCheck, Import, Save, Search, Send, X } from "lucide-react";
import { useRef, useState } from "react";

interface TestProps {}

export default function Test(props: TestProps) {

    const [code, setCode] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    return (
        <div className="w-1/2 p-3">
            <Fieldset label="Dados Gerais">
                <div className="flex flex-row my-2 items-center gap-2">
                    <div className="w-[170px]">
                        <span>Código:</span>
                    </div>
                    <TextField number value={code} onChange={e => setCode(e.target.value)} placeholder="Código"/>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 w-28 h-8">
                            <Button onClick={() => window.alert('ok')}>
                                <span>
                                    <Search width={15} height={15} />
                                </span>
                                <span>Consultar</span>
                            </Button>                 
                        </div>
                        <div className="flex flex-row w-52 h-8">
                            <Button onClick={() => window.alert('ok')} type="outline">
                                <span><Import width={15} height={15} /></span>
                                <span>Importar Configuração</span>
                            </Button>   
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="w-[95px]">
                        <span>Descrição:</span>
                    </div>
                    <div className="w-full">
                        <TextField value={code} onChange={e => setCode(e.target.value)} placeholder="Descrição"/>
                    </div> 
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="w-[95px]">
                        <span>E-mail Remetente:</span>
                    </div>
                    <div className="w-full">
                        <TextField number value={code} onChange={e => setCode(e.target.value)} placeholder="E-mail Remetente"/>
                    </div> 
                </div>
                <div className="flex flex-row my-2 items-center gap-2">
                    <div className="w-[210px]">
                        <span>Tipo:</span>
                    </div>
                    <Select onChange={() => console.log()}>
                        <SelectOption value="teste">Outros</SelectOption>
                    </Select>
                    <span>Status:</span>
                    <Select onChange={() => console.log()}>
                        <SelectOption value="teste">ATIVO</SelectOption>
                    </Select>
                </div>
            </Fieldset>
            <Fieldset label="Amazon">
                <div className="flex flex-row my-2 items-center gap-2">
                    <div className="w-[220px]">
                        <span className="">Access Key:</span>
                    </div>
                    <TextField value={code} placeholder="Access Key" onChange={() => console.log()}/>
                    <span className="min-w-20 text-center">Secret Key:</span>
                    <TextField value={code} placeholder="Secret Key" onChange={() => console.log()}/>
                </div>
                <div className="flex flex-row my-2 items-center gap-2">
                    <div className="w-[225px]">
                        <span className="">Região:</span>
                    </div>
                    <Select onChange={() => console.log()}>
                        <SelectOption value="teste">Leste dos EUA (Norte da Virgínia) us-east-1</SelectOption>
                    </Select>
                    <span className="min-w-24 text-center">Config. Set:</span>
                    <TextField value={code} placeholder="Configuration Set" onChange={() => console.log()}/>
                </div>
                
                <Fieldset label="Verificação de E-mail Remetente">
                    <p>
                        Só é possível enviar e-mails de um endereço remetente verificado.
                        <br/>
                        Para verificar o endereço de e-mail, siga os passos abaixo:
                    </p>
                    <br/>
                    <Checklist>
                        <ChecklistItem>Clique no botão "Enviar e-mail de verificação";</ChecklistItem>
                        <ChecklistItem>Acesse a caixa de entrada do e-mail em questão;</ChecklistItem>
                        <ChecklistItem>Clique sobre o e-mail enviado pela Amazon";</ChecklistItem>
                        <ChecklistItem>Clique sobre o link contido no corpo do e-mail";</ChecklistItem>
                        <ChecklistItem>Clique no botão "Confirmar E-mail".</ChecklistItem>
                    </Checklist>
                    <br/>
                    <div className="flex flex-row w-7/12 gap-2 h-8">
                        <Button onClick={() => alert("ok")}>
                            <span> 
                                <Send width={15} height={15} />
                            </span>
                            <span>Enviar Verificação</span>
                        </Button>
                        <Button onClick={() => alert("ok")}> 
                            <span> 
                                <BadgeCheck width={15} height={15} />
                            </span>
                            <span>Confirmar E-mail</span>
                        </Button>
                    </div>
                </Fieldset>

                <Fieldset label="Rodapé">
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col w-full max-h-60">
                            <span>Mensagem de Rodapé:</span>
                            <Textarea value="" onChange={() => console.log()}></Textarea>
                            <p className="text-sm py-1">Essa mensagem sempre será adicionada ao final dos e-mails enviados.</p>
                        </div>  
                    </div>
                </Fieldset>
            </Fieldset>
            <div className="flex flex-row gap-2 max-w-36 h-8 my-2">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row gap-2 w-24 h-8">
                        <Button onClick={() => window.alert('ok')}>
                            <span>
                                <Save width={15} height={15} />
                            </span>
                            <span>Salvar</span>
                        </Button>                 
                    </div>
                    <div className="flex flex-row w-24 h-8">
                        <Button onClick={() => window.alert('ok')} type="outline">
                            <span><X width={15} height={15} /></span>
                            <span>Limpar</span>
                        </Button>   
                    </div>
                </div>
            </div>
        </div>
    )
}