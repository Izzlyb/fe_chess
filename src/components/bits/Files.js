import './Files.css'

import {getCharacter} from '../../app/helper'


const Files = ({files}) => 
    <div className="files">
        {files.map(file => <span key={file}>{file+getCharacter(file)}</span>)}
    </div>

export default Files
