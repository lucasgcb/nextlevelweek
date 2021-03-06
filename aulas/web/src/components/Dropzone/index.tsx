import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';
import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}
// Function Component do react
const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file)
        setSelectedFileUrl(fileUrl);
        onFileUploaded(file)
    }, [onFileUploaded])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className='dropzone' {...getRootProps()} >
            <input {...getInputProps()} accept='image/*' />
            {
                selectedFileUrl ?
                    <img src={selectedFileUrl} alt="img"></img> : <p><FiUpload /> Clique ou Arraste para cadastrar a imagem do estabelecimento</p>
            }
        </div>
    )
}

export default Dropzone