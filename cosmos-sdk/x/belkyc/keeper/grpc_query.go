package keeper

import (
	"github.com/cosmos/cosmos-sdk/x/belkyc/types"
)

var _ types.QueryServer = Keeper{}
