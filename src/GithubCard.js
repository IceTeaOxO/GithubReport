import { Link } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GithubCard = ({ detail }) => {
    const AuthName = detail[0];
    const RepoName = detail[1];
    const URL = detail[2];
    const Issues = detail[3];
    const Stars = detail[4];
    const UpdateDate = detail[5];
    const Path = detail[6];
    const Language = detail[7];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={URL} underline='none'>
                {/* i get rid of the width restrict of the card 
                cause they're gonna cover each other if the window size is not wide enough
                by doing so, if the window side is not that wide,
                it would decrease the amount of the cards in one row automatically
                however, the card looks quite small rn,
                maybe i would check out how to set a width restrict which could automatically change while the window size changed*/}
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {AuthName}/{RepoName}
                        </Typography>

                        <Typography variant="body2">
                            <p>Issues:{Issues}</p>
                            <p>Stars:{Stars}</p>
                            <p>Language:{Language}</p>
                            <p>Updated_Date:{UpdateDate}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}
export default GithubCard;