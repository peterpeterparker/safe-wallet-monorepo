import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import type { ReactElement } from 'react'
import ExternalLink from '../ExternalLink'

export function TemporaryDialog(): ReactElement {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Demo Purpose Only</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography color="text.primary">
            This app is a fork of <ExternalLink href="https://app.safe.global/">{`Safe{Wallet}`}</ExternalLink>,
            deployed exclusively for demonstration purposes. Do not use it for real transactions or production
            applications.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box m={1}>
          <Button onClick={handleClose} variant="contained">
            I understand
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
