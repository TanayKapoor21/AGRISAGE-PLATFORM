import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EmergencyButton() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => {
          setShowDialog(true);
          console.log("Emergency button clicked");
        }}
        data-testid="button-emergency"
        className="gap-2 w-full max-w-xs"
      >
        <AlertTriangle className="h-5 w-5" />
        <span>Emergency Help</span>
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent data-testid="dialog-emergency">
          <DialogHeader>
            <DialogTitle>Emergency Assistance</DialogTitle>
            <DialogDescription>
              Contact local authorities for immediate help
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-muted rounded-md">
              <Phone className="h-5 w-5" />
              <div>
                <div className="font-semibold">Local Police</div>
                <div className="text-sm text-muted-foreground">100</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted rounded-md">
              <Phone className="h-5 w-5" />
              <div>
                <div className="font-semibold">Agricultural Department</div>
                <div className="text-sm text-muted-foreground">1800-180-1551</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted rounded-md">
              <Phone className="h-5 w-5" />
              <div>
                <div className="font-semibold">Wildlife Emergency</div>
                <div className="text-sm text-muted-foreground">1800-345-5678</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
