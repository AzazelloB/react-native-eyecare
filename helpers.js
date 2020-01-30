export const getTime = ( { m, s } ) => {
    if ( s < 10 ) {
        s = '0' + s;
    }
    if ( m < 10 ) {
        m = '0' + m;
    }

    return m + ':' + s;
};

export const COLORS = {
    primary0: '#2E4372',
    primary1: '#7788AA',
    primary2: '#4E638E',
    primary3: '#152A55',
    primary4: '#061639',
    
    secondary10: '#403075',
    secondary11: '#877CB0',
    secondary12: '#605292',
    secondary13: '#261758',
    secondary14: '#12073B',

    secondary20: '#226765',
    secondary21: '#679B99',
    secondary22: '#41817F',
    secondary23: '#0D4D4B',
    secondary24: '#003432',

    white: '#ffffff'
}