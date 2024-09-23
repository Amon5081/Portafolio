function CardContact() {
    return (
        <div class="container_terminal">
            <div class="terminal_toolbar">
                <div class="butt">
                    <button class="btn btn-color"></button>
                    <button class="btn"></button>
                    <button class="btn"></button>
                </div>
                <p class="user"> Abrahan Admin: ~</p>
                <div class="add_tab">+</div>
            </div>
            <div class="terminal_body">
                <div class="terminal_prompt">
                    <span class="terminal_user">Abrahan@admin:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                    <span class="terminal_cursor"></span>
                </div>
                <div class="terminal_output">
                    <pre class="output_text">/help contact <br></br>Puedes contactarme a traves de :
                        <br></br><a className="link" href="https://www.linkedin.com/in/abrahan-corona-2646a32ba/" target="_blank" >/command linkedin</a>
                        <br></br><a className="link" href="https://github.com/Amon5081" target="_blank">/command github</a>
                        <br></br><a className="link" href="mailto:abrahan_trabajo_web@proton.me" target="_blank">/command Email</a>
                        <br></br><a className="link" href="https://wa.me/+541125246985">/command Whatsapp</a>
                    </pre>
                </div>
                <div class="terminal_input">
                    <input placeholder="Type a command..." class="input_text" type="text" />
                </div>
            </div>
        </div>

    );
}

export default CardContact;
