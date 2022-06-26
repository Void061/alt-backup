import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Skeleton_article(){
    return(
        <Stack spacing={1}>
      
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={350} height={250} />

      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />

      
    </Stack>
    )
}