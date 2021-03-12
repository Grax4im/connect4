export function Row(props) {

    function classes () {
        let retornoClasses = 'row ';
        if(props.msg !== 0) {
            if(props.msg === 1) {
                retornoClasses += 'red'
            }
            else if(props.msg === 2) {
                retornoClasses += 'yellow'
            }
            else if(props.msg === 3) {
                retornoClasses += 'redPiscando'
            }
            else if(props.msg === 4) {
                retornoClasses += 'yellowPiscando'
            }
        }
        return retornoClasses;
    }
    function ganhador(){
        return props.msg > 2 && 'X'; 
    }
    return (
        <span className={classes()}>
        </span>
    );
}